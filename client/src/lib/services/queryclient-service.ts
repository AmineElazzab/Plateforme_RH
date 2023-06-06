import { queryClient } from "src/pages/_app";

import { getTasks } from "~hooks/query-hooks/useTasks";
import { getProjects } from "~hooks/query-hooks/useProjects";
import { getDepartments } from "~hooks/query-hooks/useDepartments";

export function createQueryClientService() {

	function getKeys(firstKey: string, search: any) {
		const keys = [firstKey];
		if (search && search.trim.length > 0) {
			keys.push(search);
		}
		return keys;
	}

	

	async function fetchProjectsSearch(search: string) {
		const keys = getKeys('assets', search);
		const data = await queryClient.fetchQuery({
			queryKey: keys,
			queryFn: getProjects({ search }),
		});

		return data;
	}

	async function fetchProjectFilterd(ctx: any) {
		const data = await queryClient.fetchQuery({
			queryKey: ['assets', 'filters'],
			queryFn: getProjects(ctx),
		});

		return data;
	}

	async function fetchTasks(search: string) {
		console.log(`🚧 [QueryService] fetchDeliveries() #search: `, search);
		const keys = getKeys('DELEVRYDATA', search);
		const data = await queryClient.fetchQuery({
			queryKey: keys,
			queryFn: getTasks({ search }),
		});

		return data;
	}

	async function fetchDepartments(search: string) {
		const keys = getKeys('contracts', search);
		const data = await queryClient.fetchQuery({
			queryKey: keys,
			queryFn: getDepartments({ search })
		});

		return data;
	}

	

	




	return {
		fetchProjectsSearch,
	    fetchProjectFilterd,
		fetchTasks,
		fetchDepartments,

	};
}