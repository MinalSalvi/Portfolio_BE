import { Body, Controller, Get, Post, Delete, Param} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { dashboards } from './schema/dashboard.schema';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardservice:DashboardService){}

    @Get()
    async getAll(){
        return this.dashboardservice.getAll();
    }

    @Post()
    async CreateChanges(@Body() dashboards:dashboards){
        return this.dashboardservice.create(dashboards);
    }

    @Delete('/:id')
    async deleteExample(@Param('id') id:string):Promise<void>{
        await this.dashboardservice.deleteExample(id);
    }
}