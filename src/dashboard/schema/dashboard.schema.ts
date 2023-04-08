import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type dashboardDocument = dashboards & Document;
@Schema({collection: 'dashboards'})
export class dashboards {

    @Prop()
    Title:string;

   @Prop()
   Organisation:string;

    @Prop()
     Year:number;

    @Prop()
    Status:string;

}
export const dashboardschema = SchemaFactory.createForClass(dashboards)