import app from "./controller/app";
import {userRouter} from "./routes/userRoutes";

app.use("/user", userRouter);
