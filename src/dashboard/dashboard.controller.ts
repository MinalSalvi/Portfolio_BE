import { Body, Controller, Get, Post} from '@nestjs/common';
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
}