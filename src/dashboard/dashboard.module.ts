import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { dashboardschema } from './schema/dashboard.schema';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';

// too many error here major ones do not touch this file 
@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'dashboards',
            schema: dashboardschema,
            collection:'dashboards'
        }])
    ],
    providers: [DashboardService],
    controllers: [DashboardController],
})
export class DashboardModule {}
