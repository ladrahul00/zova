import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as swaggerUi from "swagger-ui-express";
import {swaggerJson} from "./swagger";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request,Response,NextFunction} from "express";
import {Routes} from "./routes";


var app=express();

app.use(bodyParser.json());

const server=app.listen(process.env.PORT || 3000);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

createConnection().then(async connection => {

    const userCounts = await connection.manager.count(User);

    if(userCounts==0)
    {
        const user1=connection.manager.save(connection.manager.create(User,{
            firstName:"Draco",
            lastName:"Malfoy",
            age:11
        }));

        const user2=connection.manager.save(connection.manager.create(User,{
            firstName:"Ron",
            lastName:"Weasly",
            age:11
        }));

        const user3=connection.manager.save(connection.manager.create(User,{
            firstName:"Harry",
            lastName:"Potter",
            age:11
        }));
    }

    console.log("Express server has started on port 3000. Open http://localhost:3000/api-docs/#/ to see swagger documentation");

}).catch(error =>{ 
    console.log(error);
    server.close();
});
