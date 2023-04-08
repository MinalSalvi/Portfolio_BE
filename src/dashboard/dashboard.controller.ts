import { Controller, Get} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardservice:DashboardService){}

    @Get()
    async getAll(){
        return this.dashboardservice.getAll();
    }
}
