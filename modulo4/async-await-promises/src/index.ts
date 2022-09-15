import axios from "axios";
import express from "express";
import cors from "cors"

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

type user = {
    id: string;
    name: string;
    email: string;
}

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data;
};

const getSubscribersTwo = async (): Promise<any[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data;
};

const getSubscribersTree = async (): Promise<user[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};

async function createNews(title: string, content: string, date: number): Promise<void> {
    await axios.post(`https://labenews.herokuapp.com/news`, {
        title: title,
        content: content,
        date: date
    });
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`https://labenews.herokuapp.com/notifications`, {
                subscriberId: user.id,
                message
            });
        }
        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
};

const sendNotificationsTwo = async (users: user[], message: string): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`https://labenews.herokuapp.com/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);

    } catch {
        console.log("Error");
    }
};


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});