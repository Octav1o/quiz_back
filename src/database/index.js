import { getConnection } from "./connection";
import sql from "mssql";

export const executeQuery = async (query, params) => {

    try {
        const pool = await getConnection();
        const request = pool.request();

        for(let key in params) {
            request.input(key, params[key]);
        }

        const result = await request.query(query);
        return result;
    } catch (err) {
        console.error(err);
        throw new Error("Error executing query");
    }

}

// export * from './connection';
// export { queries } from './queries';