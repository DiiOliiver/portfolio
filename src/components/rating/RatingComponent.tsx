import React from "react";
import {Box, Rating} from "@mui/material";
import CIcon from "@coreui/icons-react";
import {cibGithub, cilStar, cilStarHalf} from "@coreui/icons";
import {CCol, CRow} from "@coreui/react";

const RatingComponent = (props: {value: number, title: string}) => {
  const { value, title} = props;

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <CRow>
        <CCol>
          <Box sx={{ mr: 3 }}>{title}</Box>
        </CCol>
        <CCol>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            icon={
              <CIcon
                className='cicon me-3'
                icon={cilStar}
                width={20}
              />
            }
            emptyIcon={
              <CIcon
                className='cicon me-3'
                icon={cilStar}
                width={20}
              />
            }
          />
        </CCol>
      </CRow>
    </Box>
  )
}

export default React.memo(RatingComponent);