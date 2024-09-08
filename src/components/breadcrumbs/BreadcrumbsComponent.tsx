import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import BreadcrumbsIn from "../../types/BreadcrumbsIn";

const BreadcrumbsComponent = ({ lists }: { lists: BreadcrumbsIn[] }) => {
  const array = lists.map((item, key) => {
    if (item.status === 'INACTIVE') {
      return <Link key={key} underline="hover" color="inherit" href={item.href}>
        { item.description }
      </Link>
    }
    return <Typography key={key} sx={{ color: 'text.primary' }}>
      { item.description }
    </Typography>
  })

  return (
    <Breadcrumbs aria-label="breadcrumb" className='mb-2'>
      { array }
    </Breadcrumbs>
  )
}

export default React.memo(BreadcrumbsComponent);