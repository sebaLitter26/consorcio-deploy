"use strict";(self.webpackChunkconsorcio=self.webpackChunkconsorcio||[]).push([[76],{9192:(D,c,a)=>{a.d(c,{Hh:()=>d,ZT:()=>p,fx:()=>l,u7:()=>s,wy:()=>m});var n=a(4928);const s=n.J1`
query buildings{
  buildings{
    address,
    location,
    letter,
  	floors,
    id,
    images
    appartments{ 
      floor,
      letter,
      observation,
      id
    }
  }
}
`,l=n.J1`
query building($id: String!){
    building(id: $id) {
        location
        address
        id
        images
        appartments{
          floor
          letter
          observation
          id
      }
    }
}
`,m=n.J1`
    mutation createBuilding($input: CreateBuildingDTO!) {
      createBuilding(input: $input) {
        address
        location
        floors
        letter
        images
        appartments{ 
            floor
            letter
            observation
            id
        }
      }
    }
`,d=n.J1`
    mutation updateBuilding($input: UpdateBuildingDTO!) {
      updateBuilding(input: $input) {
        address
        location
        floors
        letter
        images
        appartments{ 
            floor
            letter
            observation
            id
        }
      }
    }
`,p=n.J1`
    mutation deleteBuilding($id: String!) {
      deleteBuilding(id: $id) {
        address
        location
        floors
        letter
        images
        appartments{ 
            floor
            letter
            observation
            id
        }
      }
    }
`},4789:(D,c,a)=>{a.d(c,{D:()=>s});var n=a(3953);let s=(()=>{class l{constructor(){}transform(d,...p){return d?`${d}`:"PB"}static#t=this.\u0275fac=function(p){return new(p||l)};static#e=this.\u0275pipe=n.EJ8({name:"floor",type:l,pure:!0})}return l})()},2038:(D,c,a)=>{var n,s;a.d(c,{l:()=>n}),(s=n||(n={})).groupBy=function l(e=[],i){return e?e.reduce((u,f)=>{const o=f[i];return u[o]=[...u[o]||[],f],u},{})??{}:{}},s.removeDuplicate=function m(e=[],i,r,u){if(!e)return[];let o=[];e=e.filter(t=>t[i]!=u||(o.push(t),!1)),o=o.sort((t,g)=>t[i]>g[i]?1:t[i]<g[i]?-1:t[r]>g[r]?1:t[r]<g[r]?-1:0);const B=o.length;let _=[];for(let t=0;t<B;t++)JSON.stringify(o[t+1])==JSON.stringify(o[t])&&_.push(o[t]);return e.push(..._),e},s.unique=function d(e,i){const r=[];return e.filter(u=>!r.includes(u[i])&&(r.push(u[i]),!0))},s.mergeWithoutDuplicates=function p(e){const i=e.reduce((r,u)=>[...r,...u],[]);return[...new Set(i)]}}}]);