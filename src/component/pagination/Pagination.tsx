import React from 'react';
import styled from 'styled-components';
import SeparatorButton from './SeparatorButton';
import PageButton from './PageButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const Wrapper = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
`;


export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div>
      <Wrapper>
        <PreviousButton disabled={page === 1} onPress={() => handlePagination(page - 1)} />
        <PageButton
            onPress={() => handlePagination(1)}
            active={page === 1}
            page={1}
        />
        
        {page > 3 && <SeparatorButton />}
        {page === totalPages && totalPages > 3 && (
          <PageButton
            onPress={() => handlePagination(page - 2)}
            active={false}
            page={page - 2}
          />
          
        )}
        {page > 2 && (
          <PageButton
          onPress={() => handlePagination(page - 1)}
          active={false}
          page={page - 1}
        />
        )}
        {page !== 1 && page !== totalPages && (
            <PageButton
                onPress={() => handlePagination(page)}
                active={true}
                page={page}
            />
          
        )}
        {page < totalPages - 1 && (
          <PageButton
          onPress={() => handlePagination(page +1)}
          active={false}
          page={page+1}
      />
        )}
        {page === 1 && totalPages > 3 && (
          <PageButton
          onPress={() => handlePagination(page +2)}
          active={false}
                      page={page + 2}
            />
        )}
        {page < totalPages - 2 && <SeparatorButton />}
        <PageButton
          onPress={() => handlePagination(totalPages)}
          active={page === totalPages}
                  page={totalPages}
        />
        
        <NextButton disabled={page === totalPages} onPress={() => handlePagination(page + 1)} />
      
      </Wrapper>
    </div>
  );
};
export const Pagination = PaginationComponent;