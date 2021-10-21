import { serverHttp } from "./app";

const PORT = 4000;

serverHttp.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
});
