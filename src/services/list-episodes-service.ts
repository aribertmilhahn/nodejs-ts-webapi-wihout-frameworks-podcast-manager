import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { podecastRepo } from "../repositories/podcast.repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    const data = await podecastRepo();

    const responseFormat: PodcastTransferModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
    
    return responseFormat;
};