import * as defaultPathConfig from "./conf.path.json";
import { HOST_PATH } from "./environments";

export interface Config {
  PORT_NUMBER?: number;
  API_PAYMENT: object;
  API_WALLET: object;
  API_DIRECT_DEBIT: object;
  API_APP_INVOKE: object;
  API_WEB_CASHIER: object;
  API_ACCOUNT_LINK: object;
  API_SUBSCRIPTION: object;
}

export class Conf {
  private readonly configLookup: any;
  private readonly portNumber: number;
  private readonly hostName: string;

  constructor({ hostName, portNumber }: { hostName: string, portNumber?: number }) {
    this.configLookup = JSON.parse(JSON.stringify(defaultPathConfig));
    this.hostName = hostName;
    this.portNumber = portNumber || 443;
  }

  static forEnvironment(env: 'PROD' | 'STAGING' | 'PERF_MODE'): Conf {
    const hostName = HOST_PATH[env];
    if (!hostName) {
      throw new Error('no built-in environment named `' + env + '`');
    }
    return new Conf({ hostName });
  }

  getHttpsMethod(nameApi: string, nameMethod: string): string {
    return this.configLookup[nameApi][nameMethod].METHOD;
  }

  getHttpsPath(nameApi: string, nameMethod: string): string {
    return this.configLookup[nameApi][nameMethod].PATH;
  }

  getApiKey(nameApi: string, nameMethod: string): string | undefined {
    return this.configLookup[nameApi][nameMethod].API_NAME;
  }

  getHostname() {
    return this.hostName;
  }

  getPortNumber() {
    return this.portNumber;
  }
}
