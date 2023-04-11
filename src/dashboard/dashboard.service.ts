import { Injectable } from '@nestjs/common';
import { dashboardDocument, dashboards } from './schema/dashboard.schema';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'


@Injectable()
export class DashboardService {
    constructor(
        @InjectModel(dashboards.name)
         private DashboardModel:Model<dashboards>,
         ){}


async getAll():Promise<dashboards[]>{
    return this.DashboardModel.find().exec();
}

async create(dashboards:dashboards){
const newChanges = new this.DashboardModel(dashboards);
    return newChanges.save();
} 
}


