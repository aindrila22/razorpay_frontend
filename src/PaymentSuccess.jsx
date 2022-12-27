import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <Box>
      <VStack
        h="30vh"
        justifyContent={"center"}
        alignItems={"center"}
        borderBottom={"1px"}
        borderColor={"#90EE90"}
      >
        <Heading textTransform={"uppercase"} textColor={"#90EE90"}>
          Order Successfull
        </Heading>

        <Text fontSize={"20px"} textColor={"#d580ff"}>
          Reference No.{referenceNum}
        </Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
