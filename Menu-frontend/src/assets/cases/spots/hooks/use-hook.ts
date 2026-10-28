import { useQuery } from "@tanstack/react-query";
import { SpotService } from "../services/spot.service";

export function useSpots() {
    return useQuery({
        queryKey: ['spots'],
        queryFn: async () => {
            const result = await SpotService.listAll()
            return result
        }
    });}