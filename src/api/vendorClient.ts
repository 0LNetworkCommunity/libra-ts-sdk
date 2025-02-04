import { AptosConfig, Network, Aptos, type MoveStructId } from "@aptos-labs/ts-sdk";
import { DEBUG_URL } from "./api";
import { addressFromString } from "../crypto/keyFactory";



export function wrapLibra(): Aptos {
  // 0. Setup the client and test accounts
  const config = new AptosConfig({ network: Network.CUSTOM, fullnode: DEBUG_URL, faucet: DEBUG_URL });
  return new Aptos(config)
}


// @params account can be string
// @params struct_id can be a string in format x::y::z
export async function get_resource(account: string, struct_id: MoveStructId): Promise<object> {
  const aptos = wrapLibra();
  const account_parse = addressFromString(account)
  return await aptos.getAccountResource({
    accountAddress: account_parse,
    resourceType: struct_id,
  })

}
