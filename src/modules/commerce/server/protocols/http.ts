export interface Request {
  method?: string | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  query: Partial<{
    [key: string]: string | string[];
  }>;
  body: any;
}

export interface Response {
  status: (statusCode: number) => Response
  json: (body: any) => void
}
