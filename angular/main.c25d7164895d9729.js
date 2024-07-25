"use strict";(self.webpackChunkconsorcio=self.webpackChunkconsorcio||[]).push([[792],{8094:(Kt,Ue,l)=>{l.d(Ue,{b:()=>n});var n=function(o){return o.APP_LIGHT="app-light-theme",o.APP_DARK="app-dark-theme",o}(n||{})},7204:(Kt,Ue,l)=>{l.d(Ue,{g:()=>h});var n=l(4412),o=l(8094),u=l(3953),v=l(6969);let h=(()=>{class E{constructor(B){this.overlayContainer=B,this.themeEventSource=new n.t(o.b.APP_DARK),this.themeEvent=this.themeEventSource.asObservable()}setColorTheme(B){this.overlayContainer.getContainerElement().classList.replace(B===o.b.APP_DARK?o.b.APP_DARK:o.b.APP_LIGHT,B),this.themeEventSource.next(B)}static#e=this.\u0275fac=function(V){return new(V||E)(u.KVO(v.Sf))};static#t=this.\u0275prov=u.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},898:(Kt,Ue,l)=>{l.d(Ue,{k:()=>ee});var n=l(6354),o=l(609),u=l(4928);u.J1`
query {
  me {
    status
    message
    user {
      id
      name
      lastname
      email
      registerDate
    }
  }
}
`;const h=u.J1`
query oAuthLogin($token: String!){
  oAuthLogin(token: $token){
    id,
    name,
    modifierId,
  	rol,
    phone,
    picture,
    isActive,
    email,
    appartment { floor , letter,  id, buildingId },
    notes,
    phone
  }
}
`;u.J1`
query login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    status
    message
    token
  }
}
`,u.J1`
query {
  users {
    id,
    name,
    modifierId,
  	rol,
    phone,
    isActive,
    email,
    appartmentId,
    notes,
    phone
  }
}
`,u.J1`
    mutation addUser($user: UserInput!) {
        register(user: $user) {
            status
            message
            user {
                id
                name
                lastname
                email
                registerDate
            }
        }
    }