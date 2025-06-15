/**
 * This answer was borrowed. For more information check the {@link https://stackoverflow.com/a/2901298 | Stack Overflow Explanation}.
 * @param number 
 * @returns 
 */
export const formatNumberAOA = (number: number, options?: Partial<{ currency: string, format: Intl.LocalesArgument }>) => {
	const { currency = 'AOA', format = 'pt-AO' } = (options ?? {});

	return number.toLocaleString(format, { style: 'currency', currency });
};
