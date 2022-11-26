import React, { useEffect, useState } from 'react';
import DomainElement from '../../components/DomainElement';
import { BackendClient } from '../../service/httpClients';
import Domain from '../../types/domain';

function Domains() {
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
      {data?.map((domain,index) => {
        return <DomainElement key={index} data={domain}/>
      })}
    </div>
  );
}

export default Domains;