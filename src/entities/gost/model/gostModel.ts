export type Gost = {
    "docId": number,
    "primary": {
        "id": number,
        "designation": string,
        "fullName": string,
        "codeOKS": string,
        "activityField": string,
        "acceptanceDate": Date,
        "commissionDate": Date,
        "author": string,
        "acceptedFirstTimeOrReplaced": string,
        "content": string,
        "keyWords": string,
        "keyPhrases": string,
        "applicationArea": string,
        "adoptionLevel": number,
        "documentText": string,
        "changes": string,
        "amendments": string,
        "status": number,
        "harmonization": number,
        "isPrimary": boolean
    },
    "actual": {
        "id": number,
        "designation": string,
        "fullName": string,
        "codeOKS": string,
        "activityField": string,
        "acceptanceDate": Date,
        "commissionDate": Date,
        "author": string,
        "acceptedFirstTimeOrReplaced": string,
        "content": string,
        "keyWords": string,
        "keyPhrases": string,
        "applicationArea": string,
        "adoptionLevel": number,
        "documentText": string,
        "changes": string,
        "amendments": string,
        "status": number,
        "harmonization": number,
        "isPrimary": boolean
    },
    "references":
    {
        "docId": number,
        "designation": string,
        "status": number
    }[]
}