/** 
 * The HTTP response from an API call 
 */
export interface HttpResponse<T> {
    message: string;
    statusCode: number;
    data: T;
}
  
/** 
 * An HTTP Response that supports pagination 
 */
export interface PaginatedResponse<T> extends HttpResponse<Page<T>> {}

  /** 
 * The data from a paginated http response object 
 */
export class Page<T> {
    page: number = 1;
    pageSize: number = 0;
    totalItems: number = 0;
    totalPages: number = 1;
    data!: T[];
}