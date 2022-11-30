import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import DomainElement from '../../components/DomainElement';
import { BackendClient } from '../../service/httpClients';
import Domain from '../../types/domain';

const StyledDomains = styled('div')(() => ({
  float:'left',
  display:'flex'
}));

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
    <StyledDomains>
      {data?.map((domain,index) => {
        return <DomainElement key={index} data={domain}/>
      })}
    </StyledDomains>
  );
}

export default Domains;