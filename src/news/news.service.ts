import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getAllNews() {
        return "getAllNews";
    }

    getOneNews(id: string) {
        return "getOneNews:" + id;
    }

    postNews(body: any) {
        return "PostNews";
    }

    putNews(body: any, id: string) {
        return "PutNews " + id;
    }

    delNews(id: string) {
        return "delete News:" + id;
    }
}
