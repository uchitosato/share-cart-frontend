import { Select, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/header/Header";
import SkeletonPrimary from "../components/skeleton/SkeletonPrimary";
import { ButtonPrimary, H5 } from "../components/styleguide/styleguide";
import { RESPONSIVE } from "../core/constants/responsive.const";
import { colors } from "../core/constants/styleguide.const";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const redirectToCartingPage = () => {
    navigate("making-cart");
  };

  return (
    <>
      <Header title={`Create a List!`} />
      <StyledBody>
        <SearchBarSection>
          <H5>{`Share with friends, enemies, and coworkers. Search for a product to get started.`}</H5>
          <SearchBar>
            <StyledSelect
              native
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option>{`Select Retailer`}</option>
              <option value={`Amazon`}>{`Amazon`}</option>
              <option value={`Ebay`}>{`Ebay`}</option>
              <option value={`Nike`}>{`Nike`}</option>
            </StyledSelect>
            <StyledSelect
              native
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option value={``}>{`Select Country Zone`}</option>
              <option value={`United States`}>{`United States`}</option>
              <option value={`Canada`}>{`Canada`}</option>
              <option value={`China`}>{`China`}</option>
              <option value={`France`}>{`France`}</option>
              <option value={`Germany`}>{`Germany`}</option>
              <option value={`India`}>{`India`}</option>
              <option value={`Italy`}>{`Italy`}</option>
              <option value={`Japan`}>{`Japan`}</option>
              <option value={`Spain`}>{`Spain`}</option>
              <option value={`United Kingdom`}>{`United Kingdom`}</option>
            </StyledSelect>
            <TextField
              required
              id="standard-required"
              label="Search"
              placeholder="Search products"
            />
          </SearchBar>
        </SearchBarSection>

        <StyledMakingCart>
          <ButtonPrimary onClick={redirectToCartingPage}>{`Making Cart`}</ButtonPrimary>
        </StyledMakingCart>

        <StyledProductsSection>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
        </StyledProductsSection><StyledProductsSection>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
          <ProductSkeleton>
            <SkeletonPrimary variant="rectangular" width={300} height={150} />
            <SkeletonPrimary variant="rectangular" width={300} height={20} />
            <SkeletonPrimary variant="rectangular" width={225} height={20} />
          </ProductSkeleton>
        </StyledProductsSection>
      </StyledBody>
      <Footer />
    </>
  );
};

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  background-color: white;
`;

const SearchBarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0px;
  padding: 24px;
  border-bottom: 2px solid ${colors.primaryBlue};
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    margin: 0px 100px 0px 100px;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledSelect = styled(Select)`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 8px;
`;

const StyledProductsSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
  align-items: center;
  gap: 20px;
  margin: 0 24px;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    margin: 0px 100px 0px 100px;  
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;
  }
`;

const StyledMakingCart = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px;
  padding: 24px 24px;
  border-bottom: 2px solid ${colors.primaryBlue};
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    margin: 0px 100px 0px 100px;
  }
`;

const ProductSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default HomePage;
