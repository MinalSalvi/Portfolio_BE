import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type dashboardDocument = Document<dashboards>;
@Schema({collection: 'dashboards'})
export class dashboards {

    @Prop()
    Title:string='';

   @Prop()
   Organisation:string='';

    @Prop()
     Year:string='';

    @Prop()
    Status:string='';

    @Prop()
    URL:string='';

}
export const dashboardschema = SchemaFactory.createForClass(dashboards);