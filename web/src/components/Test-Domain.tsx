import React, { ReactElement, useEffect, useState } from 'react';
import Domain from '../types/domain';
import {BackendClient} from '../service/httpClients/index'


export default function TestDomain(): ReactElement {
    const [data, initData] = useState<Domain[]>()
    
    const getDomains =  async () => {
        initData((await BackendClient.Domain.getAll()));
    }
    useEffect(() => {
        getDomains()
            .catch( (e) => console.log(e))
      }, [])

    return (
        <div>
            {data?.map((d,i) => {
                return (
                    <React.Fragment key={i}>
                        <p>Domain Name: {d.domainName} </p>
                        <p>Country: {d.country} </p>
                    </React.Fragment>
                )
            })}
        </div>
    );
  }

