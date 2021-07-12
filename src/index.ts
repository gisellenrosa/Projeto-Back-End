import app from "./controller/app";
import {userRouter} from "./routes/userRoutes";
import {photoRouter} from "./routes/photoRoutes";

app.use("/user", userRouter);
app.use("/photo", photoRouter);