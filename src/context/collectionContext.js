import React, { createContext, useContext, useState, useRef } from "react";
import { shopifyProductService } from "../services/shopify/collection";

const CollectionsContext = createContext();

const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

export const CollectionsProvider = ({ children }) => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Cache storage with timestamp
    const cacheRef = useRef({
        data: null,
        timestamp: null,
        ids: null,
    });

    const isCacheValid = (collectionIds) => {
        const cache = cacheRef.current;

        if (!cache.data || !cache.timestamp || !cache.ids) {
            return false;
        }

        // Check if cache has expired
        const now = Date.now();
        if (now - cache.timestamp > CACHE_DURATION) {
            return false;
        }

        // Check if requested IDs match cached IDs
        const idsMatch = JSON.stringify(collectionIds) === JSON.stringify(cache.ids);
        return idsMatch;
    };

    const getCachedData = () => {
        return cacheRef.current.data;
    };

    const setCachedData = (data, collectionIds) => {
        cacheRef.current = {
            data,
            timestamp: Date.now(),
            ids: collectionIds,
        };
    };

    const fetchCollectionsById = async (collectionIds) => {
        // Check cache first
        if (isCacheValid(collectionIds)) {
            console.log("Using cached collections data");
            setCollections(getCachedData());
            return getCachedData();
        }

        setLoading(true);
        setError(null);

        try {
            const collectionsData = await shopifyProductService.getCollectionProductsByHandle(
                collectionIds
            );

            setCollections(collectionsData);
            setCachedData(collectionsData, collectionIds);

            return collectionsData;
        } catch (err) {
            const errorMsg = err.message || "Failed to fetch collections";
            setError(errorMsg);
            console.error("Error fetching collections:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const refreshCollections = async (collectionIds, bypassCache = true) => {
        // If bypassCache is true, clear the cache before fetching
        if (bypassCache) {
            cacheRef.current = {
                data: null,
                timestamp: null,
                ids: null,
            };
        }

        setLoading(true);
        setError(null);

        try {
            const collectionsData = await shopifyProductService.getCollectionProductsByHandle(
                collectionIds
            );

            setCollections(collectionsData);
            setCachedData(collectionsData, collectionIds);

            return collectionsData;
        } catch (err) {
            const errorMsg = err.message || "Failed to refresh collections";
            setError(errorMsg);
            console.error("Error refreshing collections:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const clearCache = () => {
        cacheRef.current = {
            data: null,
            timestamp: null,
            ids: null,
        };
    };

    return (
        <CollectionsContext.Provider
            value={{
                collections,
                loading,
                error,
                fetchCollectionsById,
                refreshCollections,
                clearCache,
            }}
        >
            {children}
        </CollectionsContext.Provider>
    );
};

export const useCollections = () => {
    const context = useContext(CollectionsContext);
    if (!context) {
        throw new Error("useCollections must be used within CollectionsProvider");
    }
    return context;
};