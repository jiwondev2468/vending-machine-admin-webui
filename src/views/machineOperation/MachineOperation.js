import {
  CPagination,
  CPaginationItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const MachineOperation = () => {
  return (
    <div>
      <h3 style={{ fontWeight: 'bold', padding: '2rem 0' }}>상태조회</h3>
      <CTable striped>
        <CTableHeaderCell colSpan={4}>
          <CTable>
            <CTableHead>
              <CTableRow style={{ textAlign: 'center' }}>
                <CTableHeaderCell scope="col"></CTableHeaderCell>

                <CTableHeaderCell scope="col">자판기 ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">조직</CTableHeaderCell>
                <CTableHeaderCell scope="col">설치위치</CTableHeaderCell>
                <CTableHeaderCell scope="col">현재온도</CTableHeaderCell>
                <CTableHeaderCell scope="col">상태</CTableHeaderCell>
                <CTableHeaderCell scope="col">금일 재고수량</CTableHeaderCell>
                <CTableHeaderCell scope="col">금일 판매수량</CTableHeaderCell>
                <CTableHeaderCell scope="col">금일 판매금액</CTableHeaderCell>
                <CTableHeaderCell scope="col">등록일시</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow style={{ textAlign: 'center' }}>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>203000030</CTableDataCell>
                <CTableDataCell>주식회사 아해바</CTableDataCell>
                <CTableDataCell>투원덴탈</CTableDataCell>
                <CTableDataCell>26</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>2024-06-10 13:01:30</CTableDataCell>
              </CTableRow>

              <CTableRow style={{ textAlign: 'center' }}>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>203000040</CTableDataCell>
                <CTableDataCell>주식회사 아해바</CTableDataCell>
                <CTableDataCell>투원덴탈</CTableDataCell>
                <CTableDataCell>26</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>2024-06-10 13:01:30</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CTableHeaderCell>
      </CTable>

      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem disabled>&lt;</CPaginationItem>
        <CPaginationItem>1</CPaginationItem>

        <CPaginationItem>&gt;</CPaginationItem>
      </CPagination>
    </div>
  )
}

export default MachineOperation
