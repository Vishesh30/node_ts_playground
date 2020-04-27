import * as boMapping from "./bo_namespace_map.json";


  export function getboNamespaceMappingData(boName: string, oldNameSpace: string) : any {
      console.log(boName + " " + oldNameSpace);
     
        for(const prop in boMapping){
            console.log(boMapping[prop]);
            if(boMapping[prop].boName === boName && boMapping[prop].oldNameSpace === oldNameSpace){
                console.log("Found");
                return boMapping[prop];
            }
        }
        return "Matching BO and OldNamespace Not found."
        // var x = Object.entries(boMapping);
        // x.forEach(ele => {
        // if(ele[1].boName === boName && ele[1].oldNameSpace === oldNameSpace){
        //         console.log("Found");
        //         return JSON.stringify(ele[1]);
        //     }else{
        //         return "Matching BO and OldNamespace Not found."
        //     }
        // });
    }

    export function getboNamespaceMappingDataNew(boName: string, oldNameSpace: string): any {
        if (boName && oldNameSpace && boMapping) {
            for (const bo in boMapping) {
                if (boMapping[bo].boName === boName && boMapping[bo].oldNameSpace === oldNameSpace) {
                    return boMapping[bo];
                }
            }
            return "Matching BO and OldNamespace Not found.";
        }
        else if ((boName == null || boName === "") && oldNameSpace && boMapping) {
            for (const bo in boMapping) {
                if (boMapping[bo].oldNameSpace === oldNameSpace) {
                    return boMapping[bo];
                }
            }
            return "Matching BO and OldNamespace Not found.";
        }
        else {
            return "Matching BO and OldNamespace Not found.";
        }
    }

