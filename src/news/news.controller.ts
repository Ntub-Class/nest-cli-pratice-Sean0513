import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService:NewsService) {}

    @Get()
    getAllNews(){
        // return "getAllNews";
        return this.newsService.getAllNews();
    }

    @Get(':id')
    getOneNews(@Param('id') id){
        // return "getOneNews:" + id;
        return this.newsService.getOneNews(id);
    }

    @Post()
    postNews(@Body() body){
        // return "PostNews";
        return this.newsService.postNews(body);
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id){
        // return "PutNews " + id;
        return this.newsService.putNews(body, id);
    }

    @Delete(':id')
    delNews(@Param('id') id){
        // return "delete News:" + id;
        return this.newsService.delNews(id);
    }
}
