import { podecastRepo } from "../repositories/podcast.repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const filterEpisodesService = async (url: string | undefined ): Promise<PodcastTransferModel> => {
    const queryString = url?.split("?p=")[1] || "";
    const data = await podecastRepo(queryString);

    const responseFormat: PodcastTransferModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};