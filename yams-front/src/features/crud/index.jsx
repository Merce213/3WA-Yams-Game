import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUri } from "../../config/api";

export const pastriesApi = createApi({
	reducerPath: "pastriesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${serverUri}/api`,
		credentials: "include",
	}),
	endpoints: (builder) => ({
		getAllPastries: builder.query({
			query: () => "/pastries",
		}),

		getPastryById: builder.query({
			query: (id) => `/pastry/${id}`,
		}),

		searchPastries: builder.query({
			query: (word) => `/search/${word}`,
		}),

		getPaginatedPastries: builder.query({
			query: ({ offset = null, limit = null }) => {
				let queryString = "";
				if (offset !== null) {
					queryString += `/${offset}`;
					if (limit !== null) {
						queryString += `/${limit}`;
					}
				}
				return queryString;
			},
		}),

		getPastriesOrderedByQuantity: builder.query({
			query: ({ offset = null, limit = null }) => {
				let queryString = "/order-quantity";
				if (offset !== null) {
					queryString += `/${offset}`;
					if (limit !== null) {
						queryString += `/${limit}`;
					}
				}
				return queryString;
			},
		}),

		getPastriesCount: builder.query({
			query: () => "/count",
		}),

		addPastry: builder.mutation({
			query: (pastryData) => ({
				url: "/",
				method: "POST",
				body: pastryData,
			}),
		}),

		updatePastry: builder.mutation({
			query: ({ id, ...updates }) => ({
				url: `/pastry/${id}`,
				method: "PUT",
				body: updates,
			}),
		}),

		deletePastry: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllPastriesQuery,
	useGetPastryByIdQuery,
	useSearchPastriesQuery,
	useGetPaginatedPastriesQuery,
	useGetPastriesOrderedByQuantityQuery,
	useGetPastriesCountQuery,
	useAddPastryMutation,
	useUpdatePastryMutation,
	useDeletePastryMutation,
} = pastriesApi;
