import { WithId } from "mongodb";
import { HTMLAttributes } from "react";

function DynamicTable<D = WithId<object>>({ name="", list, ...props }: { list: D[], name?: string } & HTMLAttributes<HTMLTableElement>) {

    switch (list.length) {
        case 0:
            return <div data-wrapper="dynamic-table">
                <table data-component="dynamic-table" {...props} data-state="loading">
                    <thead>
                        <tr className="animate-pulse">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="animate-pulse">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>;

        default:
            const headers = Object.keys(list[0] as object);

            return <div data-wrapper="dynamic-table">
                <table data-component="dynamic-table" {...props}>
                    <thead>
                        <tr>
                            {headers.map(header => <th key={header}>{header}</th>)}
                        </tr>
                    </thead>

                    <tbody>
                        {list.map(row => <tr key={(row as { id: number }).id} id={!name ? undefined : `${name}-${(row as { id: number }).id}`}>
                            {headers.map(key => {
                                const value = (row as Record<string, number | string>)[key as string];
                                const isNumber = typeof value === "number";

                                return <td key={key} className={isNumber ? "text-right" : undefined}>
                                    {value}
                                </td>
                            })}
                        </tr>)}
                    </tbody>
                </table>
            </div>;
    }


};

export default DynamicTable;