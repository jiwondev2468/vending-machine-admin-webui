import {
  CButton,
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

const AdSetting = () => {
  return (
    <>
      <h3 style={{ fontWeight: 'bold', padding: '2rem 0' }}>광고 관리</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '45%', minHeight: '300px', backgroundColor: 'white' }}>
          <header
            style={{
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}
          >
            <span>
              검색결과 <span style={{ color: 'blue', fontWeight: 'bold' }}>3</span>건
            </span>
            <div>
              <CButton style={{ margin: '0 0.5rem' }} color="primary" href="#">
                광고 신규등록
              </CButton>
              <CButton style={{ margin: '0 0.5rem' }} color="primary" href="#">
                수정
              </CButton>
              <CButton style={{ margin: '0 0.5rem' }} color="primary" href="#">
                삭제
              </CButton>
            </div>
          </header>
          <CTable striped>
            <CTableHeaderCell colSpan={4}>
              <CTable>
                <CTableHead>
                  <CTableRow style={{ textAlign: 'center' }}>
                    <CTableHeaderCell scope="col">
                      <input type="checkbox" />
                    </CTableHeaderCell>

                    <CTableHeaderCell scope="col">광고ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">광고명</CTableHeaderCell>
                    <CTableHeaderCell scope="col">조직/광고주</CTableHeaderCell>
                    <CTableHeaderCell scope="col">광고유형</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow style={{ textAlign: 'center' }}>
                    <CTableHeaderCell scope="row">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>55</CTableDataCell>
                    <CTableDataCell>울트라치실_가로</CTableDataCell>
                    <CTableDataCell>주식회사 아헤바/</CTableDataCell>
                    <CTableDataCell>가로형/전체</CTableDataCell>
                  </CTableRow>

                  <CTableRow style={{ textAlign: 'center' }}>
                    <CTableHeaderCell scope="row">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>54</CTableDataCell>
                    <CTableDataCell>111</CTableDataCell>
                    <CTableDataCell>주식회사 아헤바/</CTableDataCell>
                    <CTableDataCell>세로형/전체</CTableDataCell>
                  </CTableRow>

                  <CTableRow style={{ textAlign: 'center' }}>
                    <CTableHeaderCell scope="row">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>53</CTableDataCell>
                    <CTableDataCell>울트라치실</CTableDataCell>
                    <CTableDataCell>주식회사 아헤바/</CTableDataCell>
                    <CTableDataCell>세로형/전체</CTableDataCell>
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
        <div style={{ fontSize: '50px' }}>➡️</div>
        <div style={{ width: '45%', minHeight: '300px', backgroundColor: 'white' }}>
          <header
            style={{
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}
          >
            <span>
              검색결과 <span style={{ color: 'blue', fontWeight: 'bold' }}>1</span>건
            </span>
            <div>
              <CButton style={{ margin: '0 0.5rem' }} color="primary" href="#">
                선택한 자판기에 광고 추가
              </CButton>
            </div>
          </header>
          <CTable striped>
            <CTableHeaderCell colSpan={4}>
              <CTable>
                <CTableHead>
                  <CTableRow style={{ textAlign: 'center' }}>
                    <CTableHeaderCell scope="col">
                      <input type="checkbox" />
                    </CTableHeaderCell>

                    <CTableHeaderCell scope="col">자판기ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">조직</CTableHeaderCell>
                    <CTableHeaderCell scope="col">설치위치</CTableHeaderCell>
                    <CTableHeaderCell scope="col">모델</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <CTableHeaderCell scope="row">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>203000030</CTableDataCell>
                    <CTableDataCell>
                      주식회사 아메바/
                      <br />
                      주식회사 아메바
                    </CTableDataCell>
                    <CTableDataCell>투윕덴탈</CTableDataCell>
                    <CTableDataCell>10N</CTableDataCell>
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
      </div>
    </>
  )
}

export default AdSetting
