// This file is auto-generated by @hey-api/openapi-ts
import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type {
  NextRunAssetsData,
  NextRunAssetsResponse,
  HistoricalMetricsData,
  HistoricalMetricsResponse,
  GetDagsData,
  GetDagsResponse,
  PatchDagsData,
  PatchDagsResponse,
  GetDagData,
  GetDagResponse,
  PatchDagData,
  PatchDagResponse,
  GetDagDetailsData,
  GetDagDetailsResponse,
  DeleteConnectionData,
  DeleteConnectionResponse,
  GetConnectionData,
  GetConnectionResponse,
  DeleteVariableData,
  DeleteVariableResponse,
  GetVariableData,
  GetVariableResponse,
  GetDagRunData,
  GetDagRunResponse,
  DeleteDagRunData,
  DeleteDagRunResponse,
} from "./types.gen";

export class AssetService {
  /**
   * Next Run Assets
   * @param data The data for the request.
   * @param data.dagId
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static nextRunAssets(
    data: NextRunAssetsData,
  ): CancelablePromise<NextRunAssetsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/ui/next_run_assets/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class DashboardService {
  /**
   * Historical Metrics
   * Return cluster activity historical metrics.
   * @param data The data for the request.
   * @param data.startDate
   * @param data.endDate
   * @returns HistoricalMetricDataResponse Successful Response
   * @throws ApiError
   */
  public static historicalMetrics(
    data: HistoricalMetricsData,
  ): CancelablePromise<HistoricalMetricsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/ui/dashboard/historical_metrics_data",
      query: {
        start_date: data.startDate,
        end_date: data.endDate,
      },
      errors: {
        400: "Bad Request",
        422: "Validation Error",
      },
    });
  }
}

export class DagService {
  /**
   * Get Dags
   * Get all DAGs.
   * @param data The data for the request.
   * @param data.limit
   * @param data.offset
   * @param data.tags
   * @param data.owners
   * @param data.dagIdPattern
   * @param data.dagDisplayNamePattern
   * @param data.onlyActive
   * @param data.paused
   * @param data.lastDagRunState
   * @param data.orderBy
   * @returns DAGCollectionResponse Successful Response
   * @throws ApiError
   */
  public static getDags(
    data: GetDagsData = {},
  ): CancelablePromise<GetDagsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags/",
      query: {
        limit: data.limit,
        offset: data.offset,
        tags: data.tags,
        owners: data.owners,
        dag_id_pattern: data.dagIdPattern,
        dag_display_name_pattern: data.dagDisplayNamePattern,
        only_active: data.onlyActive,
        paused: data.paused,
        last_dag_run_state: data.lastDagRunState,
        order_by: data.orderBy,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Patch Dags
   * Patch multiple DAGs.
   * @param data The data for the request.
   * @param data.requestBody
   * @param data.updateMask
   * @param data.limit
   * @param data.offset
   * @param data.tags
   * @param data.owners
   * @param data.dagIdPattern
   * @param data.onlyActive
   * @param data.paused
   * @param data.lastDagRunState
   * @returns DAGCollectionResponse Successful Response
   * @throws ApiError
   */
  public static patchDags(
    data: PatchDagsData,
  ): CancelablePromise<PatchDagsResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/public/dags/",
      query: {
        update_mask: data.updateMask,
        limit: data.limit,
        offset: data.offset,
        tags: data.tags,
        owners: data.owners,
        dag_id_pattern: data.dagIdPattern,
        only_active: data.onlyActive,
        paused: data.paused,
        last_dag_run_state: data.lastDagRunState,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }

  /**
   * Get Dag
   * Get basic information about a DAG.
   * @param data The data for the request.
   * @param data.dagId
   * @returns DAGResponse Successful Response
   * @throws ApiError
   */
  public static getDag(data: GetDagData): CancelablePromise<GetDagResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      errors: {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Unprocessable Entity",
      },
    });
  }

  /**
   * Patch Dag
   * Patch the specific DAG.
   * @param data The data for the request.
   * @param data.dagId
   * @param data.requestBody
   * @param data.updateMask
   * @returns DAGResponse Successful Response
   * @throws ApiError
   */
  public static patchDag(
    data: PatchDagData,
  ): CancelablePromise<PatchDagResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/public/dags/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      query: {
        update_mask: data.updateMask,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }

  /**
   * Get Dag Details
   * Get details of DAG.
   * @param data The data for the request.
   * @param data.dagId
   * @returns DAGDetailsResponse Successful Response
   * @throws ApiError
   */
  public static getDagDetails(
    data: GetDagDetailsData,
  ): CancelablePromise<GetDagDetailsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags/{dag_id}/details",
      path: {
        dag_id: data.dagId,
      },
      errors: {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Unprocessable Entity",
      },
    });
  }
}

export class ConnectionService {
  /**
   * Delete Connection
   * Delete a connection entry.
   * @param data The data for the request.
   * @param data.connectionId
   * @returns void Successful Response
   * @throws ApiError
   */
  public static deleteConnection(
    data: DeleteConnectionData,
  ): CancelablePromise<DeleteConnectionResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/public/connections/{connection_id}",
      path: {
        connection_id: data.connectionId,
      },
      errors: {
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }

  /**
   * Get Connection
   * Get a connection entry.
   * @param data The data for the request.
   * @param data.connectionId
   * @returns ConnectionResponse Successful Response
   * @throws ApiError
   */
  public static getConnection(
    data: GetConnectionData,
  ): CancelablePromise<GetConnectionResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/connections/{connection_id}",
      path: {
        connection_id: data.connectionId,
      },
      errors: {
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }
}

export class VariableService {
  /**
   * Delete Variable
   * Delete a variable entry.
   * @param data The data for the request.
   * @param data.variableKey
   * @returns void Successful Response
   * @throws ApiError
   */
  public static deleteVariable(
    data: DeleteVariableData,
  ): CancelablePromise<DeleteVariableResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/public/variables/{variable_key}",
      path: {
        variable_key: data.variableKey,
      },
      errors: {
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }

  /**
   * Get Variable
   * Get a variable entry.
   * @param data The data for the request.
   * @param data.variableKey
   * @returns VariableResponse Successful Response
   * @throws ApiError
   */
  public static getVariable(
    data: GetVariableData,
  ): CancelablePromise<GetVariableResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/variables/{variable_key}",
      path: {
        variable_key: data.variableKey,
      },
      errors: {
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }
}

export class DagRunService {
  /**
   * Get Dag Run
   * @param data The data for the request.
   * @param data.dagId
   * @param data.dagRunId
   * @returns DAGRunResponse Successful Response
   * @throws ApiError
   */
  public static getDagRun(
    data: GetDagRunData,
  ): CancelablePromise<GetDagRunResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags/{dag_id}/dagRuns/{dag_run_id}",
      path: {
        dag_id: data.dagId,
        dag_run_id: data.dagRunId,
      },
      errors: {
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }

  /**
   * Delete Dag Run
   * Delete a DAG Run entry.
   * @param data The data for the request.
   * @param data.dagId
   * @param data.dagRunId
   * @returns void Successful Response
   * @throws ApiError
   */
  public static deleteDagRun(
    data: DeleteDagRunData,
  ): CancelablePromise<DeleteDagRunResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/public/dags/{dag_id}/dagRuns/{dag_run_id}",
      path: {
        dag_id: data.dagId,
        dag_run_id: data.dagRunId,
      },
      errors: {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        422: "Validation Error",
      },
    });
  }
}