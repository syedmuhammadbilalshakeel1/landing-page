import React from 'react'
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Allheading = () => {
  return (
    
    <>
     <div className="new">
          <Stack direction="horizontal" className="TOPNAV" gap={3}>
            <div className="">
              <h1 style={{ color: "white" }}>Omaga</h1>
            </div>
            <div className=" ms-auto" style={{ color: "white" }}>
              DEMO
            </div>
            <div className=" " style={{ color: "white" }}>
              page
            </div>
            <div className="" style={{ color: "white" }}>
              support
            </div>
            <div className=" bu">
              <div className="mb-2 ">
                <Button variant="danger" size="lg">
                  Large button
                </Button>
              </div>
            </div>
          </Stack>
        </div>
    



    
    </>
  )
}

export default Allheading