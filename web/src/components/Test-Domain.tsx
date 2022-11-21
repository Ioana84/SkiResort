import React, { ReactElement, useEffect, useState } from 'react';
import Domain from '../types/domain';
import {BackendClient} from '../service/httpClients/index'


export default function TestDomain(): ReactElement {
    const [data, initData] = useState<Domain[]>()
    
    const getDomains =  async (): Promise<Domain[]> => {
        return (await BackendClient.Domain.getAll()).data
    }

    useEffect(() => {
        getDomains()
            .then((res: Domain[]) => initData(res))
            .catch( (e) => console.log(e))
      }, [])

    return (
        // id?: number,
        // domainLength?: number,
        // domainName?: string,
        // domainDescription?: string,
        // country?: string
        <div>
            {data?.map((d, idx) => {
                return (
                    <div>
                        <p>Domain Name: {d.domainName} </p>
                        <p>Country: {d.country} </p>
                    </div>
                )
            })}
        </div>
    );
  }

