import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { App } from '@blocklet/ui';
import { querySingleBlock, querySingleTransaction } from '../server/api';
import { BlockChainQueryError, Block } from './.types';
function Home() {
  const [hash, setHash] = useState('000000000000000010007878ec04bb2b2e12317804810f4c26033585b3f81ffaa');
  const [blockData, setBlockData] = useState<Block | BlockChainQueryError>();

  const getBlockData = async () => {
    const res = await querySingleBlock<Block | BlockChainQueryError>(hash);
    setBlockData(res);
  };

  const renderTransactions = () => {};
  const renderBlock = () => {};
  const renderError = () => {};
  const renderAppBar = () => {};
  const renderContent = () => {
    if ((blockData as BlockChainQueryError).error) {
      return renderError();
    }
    return (
      <>
        {renderBlock()}
        {renderTransactions()}
      </>
    );
  };
  const render = () => {
    return (
      <>
        {renderAppBar()}

        {renderContent()}
      </>
    );
  };
  return render();
}

export default Home;
