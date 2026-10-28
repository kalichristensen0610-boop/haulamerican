import {readFile,writeFile,mkdir} from 'node:fs/promises';
import content from '../src/content.json' with {type:'json'};
const cities=['Burleson','Fort Worth','Mansfield','Arlington','Cleburne','Crowley','Joshua','Benbrook','Forest Hill','Everman','Kennedale','Edgecliff Village','Lake Worth','Aledo','Granbury','Godley','Rendon'];
const routes=[['about','About Us'],['services','Junk Removal Services'],['service-areas','Our Service Areas'],['pricing','Pricing'],['reviews','Reviews'],['faq','FAQ'],['quote','Plan Your Pickup'],...cities.map(c=>['service-areas/'+c.toLowerCase().replaceAll(' ','-'),'Junk Removal in '+c+', TX']),...content.serviceDetails.map(s=>['services/'+s[0],s[1]])];
const html=await readFile('dist/index.html','utf8');
for(const [route,title] of routes){await mkdir('dist/'+route,{recursive:true});await writeFile('dist/'+route+'/index.html',html.replace(/<title>.*?<\/title>/,'<title>'+title+' | Haul American Junk</title>'));}
console.log(`Prepared ${routes.length+1} directly accessible pages.`);
