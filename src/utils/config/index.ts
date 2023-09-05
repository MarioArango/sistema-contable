export const backendURL = process.env.NEXT_PUBLIC_REACT_APP_RUTA_API?? ''
export const secretEncrypt = process.env.NEXT_PUBLIC_REACT_APP_SECRET_DATA?? ''
export const blobStorageUrl = process.env.NEXT_PUBLIC_REACT_APP_RUTA_BLOB_STORAGE??''
export const blobStorageContainerName = process.env.NEXT_PUBLIC_REACT_APP_RUTA_BLOB_STORAGE_CONTAINER_NAME??''
export const blobStorageContainerPrefix = process.env.NEXT_PUBLIC_REACT_APP_RUTA_BLOB_STORAGE_CONTAINER_PREFIX??''

export const tableProps = {
  size: 'small',
  pagination: false,
  bordered: true,
  // className: 'gx-table-responsive gx-pointer',
  sticky: true,
  scroll: { y: `45vh`, x: true },
  footer: (records: any[]) => `TOTAL REGISTROS: ${records && records.length}`,
}

export const modalProps = {
  maskClosable: false,
  destroyOnClose: true,
  footer: null,
  centered: true,
  bodyStyle: { padding: 0 },
}

export const cardProps = {
  bodyStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  bordered: false,
}

export const tableScroll = (query = '.ant-table-body') => {
  const vpHeight = window.innerHeight;
  const tableBody = window.document.querySelector(query);
  if (tableBody) {
    const tblBoundle = tableBody.getBoundingClientRect();
    const tblHeight = vpHeight - (tblBoundle.top + 30 + 50 + 55);
    const data = { y: Math.ceil(tblHeight), x: `80vw` };
    return data;
  }
  return { y: `45vh`, x: `80vw` };
}