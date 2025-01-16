

const DescDevice = ( {operating_system, network, screen, screenSize, wireless_network }) => {
    return (
        <>
        {operating_system || network || screen || screenSize || wireless_network ?
            <div className="overflow-x-auto border-b-2 pb-6">
            <table className="table">
                            
              <tbody>
                {
                    operating_system?.length>0 && <tr>
                    <td>Operating System</td>
                    <td>{operating_system}</td>
                    
                  </tr>
                }
                
                
                {
                    screen?.length>0 &&<tr>
                    <td>Screen</td>
                    <td>{screen}</td>
                    
                  </tr>
                }
                {
                    screenSize?.length>0 &&<tr>                  
                    <td>Screen Size</td>
                    <td>{screenSize}</td>                  
                  </tr>
                }
                {
                    network?.length>0 &&<tr>                  
                    <td>Network</td>
                    <td>{network}</td>                  
                  </tr>
                }
                {    wireless_network?.length>0 &&<tr>                  
                    <td>Wireless Network</td>
                    <td>{wireless_network}</td>                  
                  </tr>
                }
                
              </tbody>
            </table>
          </div> :""
        }
        </>
    );
};

export default DescDevice;