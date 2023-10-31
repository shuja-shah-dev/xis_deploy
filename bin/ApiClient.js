class ApiClient {
  constructor(baseURL, apiConfig) {
    this.baseURL = baseURL;
    this.apiConfig = apiConfig;
  }

  async callApi(apiName, customConfig = {}) {
    try {
      if (this.apiConfig.hasOwnProperty(apiName)) {
        const endpoint = this.apiConfig[apiName];
        const url = `${this.baseURL}${endpoint}`;
        const response = await fetch(url, customConfig);

        if (!response.ok) {
          throw new Error("Request failed");
        }

        return await response.json();
      } else {
        throw new Error(`API configuration for "${apiName}" not found.`);
      }
    } catch (error) {
      throw error;
    }
  }

  async postApi(apiName, customConfig = {}) {
    try {
      if (this.apiConfig.hasOwnProperty(apiName)) {
        const endpoint = this.apiConfig[apiName];
        const url = `${this.baseURL}${endpoint}`;
        const response = await fetch(url, {
          method: "POST",
          ...customConfig,
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        return await response.json();
      } else {
        throw new Error(`API configuration for "${apiName}" not found.`);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default ApiClient;
