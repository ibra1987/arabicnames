import { contentful } from "./config";

export default 
function getSingle(field,identifier,type){

    const response = await contentful.getEntry({
        field:identifier,
        content_type: type,
      });
return response
}