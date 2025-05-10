import { HTMLAttributes } from "react";

function DynamicTable<D = object & { id: number }>({ list, ...props }: { list: D[] } & HTMLAttributes<HTMLTableElement>) {
    const headers = Object.keys(list[0] as object);

    return <table data-component="dynamic-table" {...props}>
        <thead>
            <tr>
                {headers.map(header => <th key={header}>{header}</th>)}
            </tr>
        </thead>

        <tbody>
            {list.map(row => <tr key={(row as { id: number }).id}>
                {headers.map(key => {
                    const value = (row as Record<string, number | string>)[key as string];
                    const isNumber = typeof value === "number";

                    return <td key={key} className={isNumber ? "text-right" : undefined}>
                        {value}
                    </td>
                })}
            </tr>)}
        </tbody>
    </table>;
};

export default DynamicTable;