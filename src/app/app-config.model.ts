//BEGIN LICENSE BLOCK 
//Interneuron Terminus

//Copyright(C) 2023  Interneuron Holdings Ltd

//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

//See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program.If not, see<http://www.gnu.org/licenses/>.
//END LICENSE BLOCK 


import { UserManagerSettings } from 'oidc-client';
import { UserIdleConfig } from 'angular-user-idle';

export interface IAppConfig {
  apiServices: [
    {
      serviceName: string;
      serviceUrl: string;
    }
  ],
  ENVIdentificationTemplate:[
    {
    environment: string;
    colour: string;
    }
  ],
   OIDCConfig: UserManagerSettings,
  userIdle: UserIdleConfig,
  currentEnvironment: string;
  mrnTypeCode: string;
  empiTypeCode: string;
}
