import { ApolloQueryCall } from '@/models';
import { useEffect, useState } from 'react';
import { ApolloQueryResult } from '@apollo/client';

const useFetchAndLoadGqlQuery = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (apolloQueryCall: ApolloQueryCall<any>) => {
    if (apolloQueryCall.controller) controller = apolloQueryCall.controller;
    setLoading(true);
    let result = {} as ApolloQueryResult<any>;
    try {
      result = await apolloQueryCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoadGqlQuery;
